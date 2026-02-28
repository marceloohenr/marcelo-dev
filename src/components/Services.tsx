import { services } from '../data/services';

const Services = () => {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="section-shell section-anchor">
      <div className="content-shell">
        <header className="section-header">
          <h2 id="servicos-title" className="section-title">Serviços</h2>
          <p className="section-subtitle">Soluções completas para sua presença digital.</p>
        </header>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.id} className="card-base card-interactive flex h-full flex-col p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-button border border-brand-500/25 bg-brand-600/10">
                  <Icon className="text-brand-400" size={22} />
                </div>

                <h3 className="text-h3 text-text-primary">{service.title}</h3>
                <p className="mt-3 text-body text-text-secondary">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
