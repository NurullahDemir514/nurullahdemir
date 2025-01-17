export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    date: string;
    category: string;
    image?: string;
    slug: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Next.js 14 ile Modern Web Uygulamaları',
        description: 'Next.js 14\'ün yeni özellikleri ve modern web uygulaması geliştirme yaklaşımları hakkında detaylı bir inceleme.',
        content: '', // Markdown içeriği buraya gelecek
        date: '2024-03-12',
        category: 'Web Geliştirme',
        slug: 'nextjs-14-ile-modern-web-uygulamalari'
    },
    // Daha fazla blog yazısı eklenebilir
]; 