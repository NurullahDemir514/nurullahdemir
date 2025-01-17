'use client'

export default function BlogPost() {
    return (
        <div className="relative pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-3xl">
                <article className="prose prose-invert prose-lg">
                    <div className="flex items-center gap-4 text-sm text-white/40 mb-8">
                        <time>10 Mart 2024</time>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>Backend</span>
                    </div>

                    <h1 className="section-title !mb-12">Mikroservis Mimarisi ve Modern Backend Çözümleri</h1>

                    <div className="card">
                        <div className="space-y-6 text-white/70">
                            <p>
                                Mikroservis mimarisi, modern yazılım geliştirmenin önemli bir parçası haline geldi. Bu yaklaşım, büyük ve karmaşık uygulamaları daha yönetilebilir parçalara ayırarak geliştirme ve bakım süreçlerini kolaylaştırıyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">Mikroservis Mimarisinin Avantajları</h2>
                            <ul className="list-disc pl-4 space-y-2 mt-4">
                                <li>Bağımsız ölçeklendirme imkanı</li>
                                <li>Teknoloji stack'i esnekliği</li>
                                <li>Hızlı geliştirme ve deployment</li>
                                <li>İzole hata yönetimi</li>
                                <li>Takımlar arası bağımsız çalışma</li>
                            </ul>

                            <h2 className="text-xl font-bold text-gradient mt-8">Docker ve Konteynerizasyon</h2>
                            <p>
                                Docker, mikroservislerin paketlenmesi ve dağıtımı için standart haline geldi. Konteynerler, uygulamaların tutarlı bir şekilde farklı ortamlarda çalışmasını sağlıyor. Docker Compose ile çoklu konteyner yönetimi ve orchestration kolaylaşıyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">Kubernetes ile Orchestration</h2>
                            <p>
                                Kubernetes, konteynerize edilmiş uygulamaların otomatik deployment, ölçeklendirme ve yönetimini sağlıyor. Service discovery, load balancing ve self-healing gibi özellikler ile production ortamında güvenilir bir altyapı sunuyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">Modern CI/CD Pratikleri</h2>
                            <p>
                                Sürekli entegrasyon ve deployment (CI/CD), mikroservis mimarisinin önemli bir parçası. GitHub Actions, GitLab CI veya Jenkins gibi araçlarla otomatik test, build ve deployment süreçleri oluşturulabiliyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">Monitoring ve Logging</h2>
                            <ul className="list-disc pl-4 space-y-2 mt-4">
                                <li>Prometheus ile metrik toplama</li>
                                <li>Grafana ile görselleştirme</li>
                                <li>ELK Stack ile log yönetimi</li>
                                <li>Distributed tracing</li>
                            </ul>

                            <div className="flex gap-2 mt-8">
                                <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                    Microservices
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                    Docker
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                    Kubernetes
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
} 