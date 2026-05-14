import { siteMetadata } from '../data/site';

const SeoSupportContent = () => {
  return (
    <section className="seo-support-content" aria-labelledby="seo-support-title">
      <div className="content-shell">
        <div className="seo-support-card">
          <h2 id="seo-support-title">{siteMetadata.seoSupportTitle}</h2>
          <p>{siteMetadata.seoSupportDescription}</p>
          <p>
            O portfólio reúne projetos de criação de sites, catálogos online, landing pages,
            desenvolvimento React, TypeScript, UI/UX, performance, SEO técnico e sistemas web sob
            medida para negócios que precisam de presença digital moderna.
          </p>
          <ul>
            <li>Criação de sites profissionais e landing pages em Recife e Pernambuco.</li>
            <li>Desenvolvimento frontend, backend e full stack para empresas no Brasil.</li>
            <li>Interfaces UI/UX com design premium, acessibilidade e foco em conversão.</li>
            <li>Sistemas personalizados, dashboards e soluções web com React e TypeScript.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SeoSupportContent;
