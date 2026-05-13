/* ========================================================================
   Convite Especial — Configuração de RSVP via Google Forms
   ------------------------------------------------------------------------
   Para que cada confirmação caia automaticamente em uma planilha do Google
   Sheets, basta criar um Google Form e preencher os campos abaixo. Veja o
   passo a passo detalhado no README.md (seção "RSVP via Google Forms").

   Enquanto os campos estiverem em branco, o convite continua funcionando
   normalmente: usa o backend Express (quando rodando via `npm start`) ou
   grava no `localStorage` do dispositivo (quando hospedado no GitHub
   Pages). Ou seja, é seguro publicar este arquivo "vazio".
   ======================================================================== */

window.CONVITE_CONFIG = {
  googleForm: {
    // ⚠️ ATENÇÃO ao formato da URL!
    //
    // Use SEMPRE a URL do formulário **publicado** (a que os convidados
    // acessam), no formato:
    //
    //     https://docs.google.com/forms/d/e/{ID_LONGO}/formResponse
    //
    // O `{ID_LONGO}` começa com `1FAIpQLS...` e só aparece quando você
    // abre o formulário no modo de visualização (botão 👁) — copie a URL
    // dessa página e troque o final `/viewform...` por `/formResponse`.
    //
    // ❌ NÃO use a URL do editor (`/forms/d/{id}/formResponse`, sem o
    //    `/e/`). Postagens nessa URL exigem login do dono do formulário e
    //    são silenciosamente descartadas para visitantes anônimos — a
    //    planilha do Google Sheets vinculada NÃO recebe as confirmações.
    formResponseUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdawAzKJJPoiZ_yOh6HdaJNypzAFvLHdpAPDyYp5zv-uFviwA/formResponse?usp=publish-editor',

    // IDs dos campos no formato "entry.<numero>". Para descobri-los,
    // use o botão "Obter link pré-preenchido" no menu (⋮) do Google Forms,
    // preencha cada campo com algo distinto, copie o link gerado e leia
    // os pares "entry.123456789=valor" da query string.
    entries: {
      // Pergunta de confirmação de presença (Sim/Não). Adicione no Google
      // Form uma pergunta do tipo "Múltipla escolha" com as opções EXATAS:
      //   - Sim, estarei presente!
      //   - Infelizmente não poderei ir
      // Em seguida descubra o `entry.<numero>` correspondente pelo método
      // do "link pré-preenchido" (veja README) e cole abaixo. Enquanto este
      // campo estiver em branco, a confirmação de presença NÃO chega à
      // planilha — apenas os demais campos são enviados.
      presenca: 'entry.375484010',                            // ex.: 'entry.666666666'
      nome: 'entry.130775309',                 // ex.: 'entry.111111111'
      sobrenome: 'entry.645770813',           // ex.: 'entry.222222222'
      acompanhantes: 'entry.576900228',       // ex.: 'entry.333333333'
      acompanhantesNomes: 'entry.1358368439',     // ex.: 'entry.444444444'
      mensagem: 'entry.376160772',             // ex.: 'entry.555555555'
    },
  },
};
