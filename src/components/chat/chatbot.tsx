"use client";

import { useState } from "react";
import {
  Bot,
  Send,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "Tell me about Sukhsimran",
  "What projects has he built?",
  "What is his experience?",
  "What is his education?",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Sukhsimran's personal AI assistant. Ask me about his projects, experience, education, skills, or anything else you'd like to know.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(message?: string) {
    const text = (message ?? input).trim();

    if (!text || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-[100] w-[calc(100vw-2.5rem)] max-w-[390px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--ivory)] shadow-[0_24px_80px_rgba(23,23,23,0.18)] sm:right-7">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--graphite)] text-[var(--ivory)]">
                <Bot size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Portfolio AI
                </p>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[11px] text-[var(--text-muted)]">
                    Ask about Sukhsimran
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition hover:bg-[var(--graphite)] hover:text-[var(--ivory)]"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex h-[380px] flex-col gap-4 overflow-y-auto px-4 py-5">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-[var(--graphite)] text-[var(--ivory)]"
                      : "rounded-bl-md border border-[var(--border)] bg-white/50 text-[var(--text-primary)]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {/* Loading */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-[var(--border)] bg-white/50 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--text-muted)]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--text-muted)] [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--text-muted)] [animation-delay:240ms]" />
                  </div>
                </div>
              </div>
            )}

            {/* Suggested questions */}
            {messages.length === 1 && !isLoading && (
              <div className="mt-1">
                <p className="mb-2 px-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Try asking
                </p>

                <div className="flex flex-col gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => sendMessage(question)}
                      className="group flex items-center justify-between rounded-xl border border-[var(--border)] px-3 py-2.5 text-left text-xs text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                    >
                      <span>{question}</span>

                      <ArrowUpRight
                        size={13}
                        className="opacity-40 transition group-hover:opacity-100"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[var(--border)] p-3">
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 rounded-2xl border border-[var(--border-strong)] bg-white/40 p-1.5"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about my work..."
                disabled={isLoading}
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[var(--text-muted)]"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--graphite)] text-[var(--ivory)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={15} />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-[var(--text-muted)]">
              <Sparkles size={9} />
              Powered by Groq
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        className="group fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--graphite)] text-[var(--ivory)] shadow-[0_12px_35px_rgba(23,23,23,0.2)] transition-all duration-300 hover:scale-105 sm:right-7"
      >
        {isOpen ? (
          <X size={21} />
        ) : (
          <>
            <Bot
              size={22}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span className="absolute inset-0 -z-10 rounded-full border border-[var(--accent)] opacity-40 animate-ping" />
          </>
        )}
      </button>
    </>
  );
}