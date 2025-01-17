'use client'

import { useEffect, useRef } from 'react'

const codeSnippets = [
    'const api = new API();',
    'async function getData() {',
    'interface Config {',
    'export default class',
    'import { useState }',
    'npm run build',
    'git push origin',
    'docker compose up'
]

interface CodeLine {
    x: number
    y: number
    speed: number
    text: string
    opacity: number
}

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const codeLines: CodeLine[] = []
        const maxLines = 20

        // Yeni kod satırı oluştur
        const createNewLine = (): CodeLine => ({
            x: Math.random() * canvas.width,
            y: -100,
            speed: Math.random() * 0.5 + 0.1, // Yavaş hareket
            text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            opacity: Math.random() * 0.05 + 0.02 // Çok düşük opaklık
        })

        // Başlangıç kod satırlarını oluştur
        for (let i = 0; i < maxLines; i++) {
            codeLines.push(createNewLine())
        }

        const draw = () => {
            // Arkaplanı temizle
            ctx.fillStyle = 'rgba(10, 15, 28, 0.1)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Font ayarları
            ctx.font = '12px "Inter", monospace'

            // Her kod satırı için
            codeLines.forEach((line, index) => {
                // Kodu çiz
                ctx.fillStyle = `rgba(100, 255, 150, ${line.opacity})`
                ctx.fillText(line.text, line.x, line.y)

                // Aşağı doğru hareket ettir
                line.y += line.speed

                // Ekranın altına ulaştığında
                if (line.y > canvas.height) {
                    codeLines[index] = createNewLine()
                }
            })
        }

        // Animasyon döngüsü
        const interval = setInterval(draw, 16)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ background: '#0a0f1c' }}
        />
    )
}

export default Background 