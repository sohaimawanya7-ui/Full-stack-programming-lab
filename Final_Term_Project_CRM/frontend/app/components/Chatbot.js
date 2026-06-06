'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const COMMANDS = {
  'help': `📋 Available commands:\n• show customers\n• add customer\n• open invoices\n• dashboard\n• help`,
  'show customers': null, // handled separately
  'add customer': null,
  'open invoices': null,
  'dashboard': null,
  'hello': '👋 Hello! I am the CRM Assistant. Type "help" to see available commands.',
  'hi': '👋 Hi there! Type "help" to see what I can do.',
  'who are you': '🤖 I am the CRM Chatbot — your assistant for navigating this system!',
}

export default function Chatbot({ customers = [] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Hi! I am your CRM Assistant.\nType "help" to see commands.' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessage = (text, type) => {
    setMessages(prev => [...prev, { type, text }])
  }

  const handleCommand = (cmd) => {
    const normalized = cmd.toLowerCase().trim()
    addMessage(cmd, 'user')

    if (normalized === 'show customers') {
      if (customers.length === 0) {
        addMessage('📭 No customers found in the system.', 'bot')
      } else {
        const list = customers.slice(0, 5).map((c, i) => `${i + 1}. ${c.name} — ${c.status}`).join('\n')
        addMessage(`👥 Showing top 5 customers:\n${list}\n\n(Go to Customers page to see all ${customers.length})`, 'bot')
      }
    } else if (normalized === 'add customer') {
      addMessage('➡️ Taking you to Add Customer page...', 'bot')
      setTimeout(() => router.push('/dashboard/add-customer'), 800)
    } else if (normalized === 'open invoices') {
      addMessage('➡️ Opening Invoice module...', 'bot')
      setTimeout(() => router.push('/dashboard/invoice'), 800)
    } else if (normalized === 'dashboard') {
      addMessage('➡️ Going to Dashboard...', 'bot')
      setTimeout(() => router.push('/dashboard'), 800)
    } else if (COMMANDS[normalized]) {
      addMessage(COMMANDS[normalized], 'bot')
    } else {
      addMessage(`❓ Unknown command: "${cmd}"\nType "help" to see available commands.`, 'bot')
    }
  }

  const handleSend = () => {
    if (!input.trim()) return
    handleCommand(input)
    setInput('')
  }

  const quickCommands = ['help', 'show customers', 'add customer', 'open invoices']

  return (
    <div className="chatbot-widget">
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            🤖 CRM Assistant
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px' }}
            >✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.type}`} style={{ whiteSpace: 'pre-wrap' }}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-commands">
            {quickCommands.map((cmd) => (
              <button key={cmd} className="cmd-btn" onClick={() => handleCommand(cmd)}>
                {cmd}
              </button>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a command..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
