// Menu dropdown responsivo veja como funcio
document.addEventListener('DOMContentLoaded', function() {
    // Variável para controlar o scroll
    let scrollPosition = 0;
    
    // Função para abrir modal
    window.openFlow = function(flowId) {
        scrollPosition = window.pageYOffset;
        document.getElementById('overlay').style.display = 'block';
        document.getElementById(flowId + '-flow').style.display = 'block';
        document.body.classList.add('modal-open');
        document.body.style.top = `-${scrollPosition}px`;
    };
    
    // Função para fechar modal
    window.closeFlow = function() {
        document.getElementById('overlay').style.display = 'none';
        document.querySelectorAll('.flow-box').forEach(box => {
            box.style.display = 'none';
        });
        document.body.classList.remove('modal-open');
        window.scrollTo(0, scrollPosition);
        document.body.style.top = '';
    };
    
    // Fechar ao clicar no overlay
    document.getElementById('overlay').addEventListener('click', closeFlow);
    
    // Fechar ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeFlow();
    });
    
    // Correção para o botão Voltar do navegador
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.classList.remove('modal-open');
            document.body.style.top = '';
        }
    });
});


//veja como funciona termina

// Função para abrir um fluxo específico
function openFlow(flowType) {
    // Esconde todos os fluxos primeiro
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('consultoria-básica-flow').style.display = 'none';
    document.getElementById('Consultoria-Premium-flow').style.display = 'none';
    document.getElementById('pacote-palestras-flow').style.display = 'none';
    document.getElementById('Pacote-Workshop-flow').style.display = 'none';
    document.getElementById('rh-estratégico-flow').style.display = 'none';
    
    // Mostra o fluxo selecionado (corrigindo para match com IDs do HTML)
    document.getElementById(flowType + '-flow').style.display = 'block';
}

// Função para fechar todos os fluxos (atualizada)
function closeFlow() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelectorAll('.flow-box').forEach(box => {
        box.style.display = 'none';
    });
}

// Adiciona eventos de clique para cada botão de fechar específico
document.addEventListener('DOMContentLoaded', function() {
    // Overlay
    document.getElementById('overlay').addEventListener('click', closeFlow);
    
    // Botões de fechar individuais (adicionando eventos corretos)
    document.querySelector('.close-button-consultoria-básica').addEventListener('click', closeFlow);
    document.querySelector('.close-button-consultoria-premium').addEventListener('click', closeFlow);
    document.querySelector('.close-button-pacote-palestras').addEventListener('click', closeFlow);
    document.querySelector('.close-button-pacote-workshop').addEventListener('click', closeFlow);
    document.querySelector('.close-button-rh-estratégico').addEventListener('click', closeFlow);

    // Restante do seu código original...
});


// Quem somos
document.addEventListener('DOMContentLoaded', function() {
    // Inicializações comuns podem vir aqui
    console.log('Página carregada');
});

// Função para fechar modais (se usado em outras páginas)
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Funções para controle dos fluxos (modais)
function openFlow(flow) {
    // Mostra o overlay
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    
    // Mostra o fluxo selecionado
    const selectedFlow = document.getElementById(`${flow}-flow`);
    if (selectedFlow) {
        selectedFlow.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Impede rolagem da página
    }
}

//Pagina Consultoria
document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir modal específico
    function openModal(modalId) {
        // Fecha qualquer modal aberto primeiro
        closeModal();
        
        // Mostra o overlay
        const overlay = document.getElementById('consultoria-overlay');
        overlay.style.display = 'block';
        
        // Mostra o modal solicitado
        const modal = document.getElementById(modalId + '-modal');
        modal.style.display = 'block';
        
        // Desabilita scroll da página
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar modal
    function closeModal() {
        // Esconde o overlay
        const overlay = document.getElementById('consultoria-overlay');
        overlay.style.display = 'none';
        
        // Esconde todos os modais
        const modals = document.querySelectorAll('.consultoria-modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        
        // Habilita scroll da página
        document.body.style.overflow = 'auto';
    }

    // Adiciona eventos de clique aos botões ovais
    const ovalButtons = document.querySelectorAll('.consultoria-oval-button');
    ovalButtons.forEach(button => {
        const modalId = button.getAttribute('onclick').match(/openModal\('(.*)'\)/)[1];
        button.addEventListener('click', () => openModal(modalId));
    });

    // Adiciona eventos de clique aos botões de fechar
    const closeButtons = document.querySelectorAll('.consultoria-close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Fecha modal ao clicar no overlay
    const overlay = document.getElementById('consultoria-overlay');
    overlay.addEventListener('click', closeModal);

    // Fecha modal ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Previne que o clique dentro do modal feche o mesmo
    const modals = document.querySelectorAll('.consultoria-modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// Funções globais para serem chamadas do HTML
function openModal(modalId) {
    // Mostra o overlay
    const overlay = document.getElementById('consultoria-overlay');
    overlay.style.display = 'block';
    
    // Mostra o modal solicitado
    const modal = document.getElementById(modalId + '-modal');
    modal.style.display = 'block';
    
    // Desabilita scroll da página
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Esconde o overlay
    const overlay = document.getElementById('consultoria-overlay');
    overlay.style.display = 'none';
    
    // Esconde todos os modais
    const modals = document.querySelectorAll('.consultoria-modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    // Habilita scroll da página
    document.body.style.overflow = 'auto';
}
//terina aqui Pagina consultoria

//Aqui começa consultoria premium//

// Página Consultoria Premium
document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir modal específico
    function openModal(modalId) {
        // Fecha qualquer modal aberto primeiro
        closeModal();
        
        // Mostra o overlay
        const overlay = document.getElementById('consultoria-overlay');
        overlay.style.display = 'block';
        
        // Mostra o modal solicitado
        const modal = document.getElementById(modalId + '-modal');
        if (modal) {
            modal.style.display = 'block';
        } else {
            // Caso especial para o modal Bem-estar (ID diferente)
            const modalAlt = document.getElementById(modalId);
            if (modalAlt) {
                modalAlt.style.display = 'block';
            }
        }
        
        // Desabilita scroll da página
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar modal
    function closeModal() {
        // Esconde o overlay
        const overlay = document.getElementById('consultoria-overlay');
        overlay.style.display = 'none';
        
        // Esconde todos os modais
        const modals = document.querySelectorAll('.consultoria-modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        
        // Habilita scroll da página
        document.body.style.overflow = 'auto';
    }

    // Adiciona eventos de clique aos botões ovais
    const ovalButtons = document.querySelectorAll('.Premium-oval-button');
    ovalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('onclick').match(/openModal\('(.*)'\)/)[1];
            openModal(modalId);
        });
    });

    // Adiciona eventos de clique aos botões de fechar
    const closeButtons = document.querySelectorAll('.consultoria-close-button-premium');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Fecha modal ao clicar no overlay
    const overlay = document.getElementById('consultoria-overlay');
    overlay.addEventListener('click', closeModal);

    // Fecha modal ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Previne que o clique dentro do modal feche o mesmo
    const modals = document.querySelectorAll('.consultoria-modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// Funções globais para serem chamadas do HTML
function openModal(modalId) {
    // Mostra o overlay
    const overlay = document.getElementById('consultoria-overlay');
    overlay.style.display = 'block';
    
    // Mostra o modal solicitado
    const modal = document.getElementById(modalId + '-modal');
    if (modal) {
        modal.style.display = 'block';
    } else {
        // Caso especial para o modal Bem-estar (ID diferente)
        const modalAlt = document.getElementById(modalId);
        if (modalAlt) {
            modalAlt.style.display = 'block';
        }
    }
    
    // Desabilita scroll da página
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Esconde o overlay
    const overlay = document.getElementById('consultoria-overlay');
    overlay.style.display = 'none';
    
    // Esconde todos os modais
    const modals = document.querySelectorAll('.consultoria-modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    // Habilita scroll da página
    document.body.style.overflow = 'auto';
}

//Aqui Termina consultoria premium//

//começa aqui o java da palestra
document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir modal específico
    function openModal(modalId) {
        // Fecha qualquer modal aberto primeiro
        closeModal();
        
        // Mostra o overlay
        const overlay = document.getElementById('palestras-overlay');
        if (overlay) overlay.style.display = 'block';
        
        // Mostra o modal solicitado
        const modal = document.getElementById(modalId + '-modal');
        if (modal) modal.style.display = 'block';
        
        // Desabilita scroll da página
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar modal
    function closeModal() {
        // Esconde o overlay
        const overlay = document.getElementById('palestras-overlay');
        if (overlay) overlay.style.display = 'none';
        
        // Esconde todos os modais
        const modals = document.querySelectorAll('.palestras-modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        
        // Habilita scroll da página
        document.body.style.overflow = 'auto';
    }

    // Adiciona eventos de clique aos botões ovais
    const ovalButtons = document.querySelectorAll('.palestras-oval-button');
    ovalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/openModal\('(.*)'\)/);
                if (match && match[1]) {
                    openModal(match[1]);
                }
            }
        });
    });

    // Adiciona eventos de clique aos botões de fechar
    const closeButtons = document.querySelectorAll('.palestras-close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Fecha modal ao clicar no overlay
    const overlay = document.getElementById('palestras-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Fecha modal ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Previne que o clique dentro do modal feche o mesmo
    const modals = document.querySelectorAll('.palestras-modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// Funções globais para serem chamadas do HTML
function openModal(modalId) {
    // Mostra o overlay
    const overlay = document.getElementById('palestras-overlay');
    if (overlay) overlay.style.display = 'block';
    
    // Mostra o modal solicitado
    const modal = document.getElementById(modalId + '-modal');
    if (modal) modal.style.display = 'block';
    
    // Desabilita scroll da página
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Esconde o overlay
    const overlay = document.getElementById('palestras-overlay');
    if (overlay) overlay.style.display = 'none';
    
    // Esconde todos os modais
    const modals = document.querySelectorAll('.palestras-modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    // Habilita scroll da página
    document.body.style.overflow = 'auto';
}
//termina aqui o java da palestra


//começa aqui pacote workshop//
// scripts.js for Treinamentos Page
document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir modal específico
    function openModal(modalId) {
        // Fecha qualquer modal aberto primeiro
        closeModal();
        
        // Mostra o overlay
        const overlay = document.getElementById('treinamentos-overlay');
        if (overlay) overlay.style.display = 'block';
        
        // Mostra o modal solicitado
        const modal = document.getElementById(modalId + '-modal');
        if (modal) modal.style.display = 'block';
        
        // Desabilita scroll da página
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar modal
    function closeModal() {
        // Esconde o overlay
        const overlay = document.getElementById('treinamentos-overlay');
        if (overlay) overlay.style.display = 'none';
        
        // Esconde todos os modais
        const modals = document.querySelectorAll('.treinamentos-modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        
        // Habilita scroll da página
        document.body.style.overflow = 'auto';
    }

    // Adiciona eventos de clique aos botões ovais
    const ovalButtons = document.querySelectorAll('.treinamentos-oval-button');
    ovalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/openModal\('(.*)'\)/);
                if (match && match[1]) {
                    openModal(match[1]);
                }
            }
        });
    });

    // Adiciona eventos de clique aos botões de fechar
    const closeButtons = document.querySelectorAll('.treinamentos-close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Fecha modal ao clicar no overlay
    const overlay = document.getElementById('treinamentos-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Fecha modal ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Previne que o clique dentro do modal feche o mesmo
    const modals = document.querySelectorAll('.treinamentos-modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// Funções globais para serem chamadas do HTML
function openModal(modalId) {
    // Mostra o overlay
    const overlay = document.getElementById('treinamentos-overlay');
    if (overlay) overlay.style.display = 'block';
    
    // Mostra o modal solicitado
    const modal = document.getElementById(modalId + '-modal');
    if (modal) modal.style.display = 'block';
    
    // Desabilita scroll da página
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Esconde o overlay
    const overlay = document.getElementById('treinamentos-overlay');
    if (overlay) overlay.style.display = 'none';
    
    // Esconde todos os modais
    const modals = document.querySelectorAll('.treinamentos-modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    // Habilita scroll da página
    document.body.style.overflow = 'auto';
}

//termina aqui pacote workshop//

//começa aqui RH estratégico//
// scripts.js for Treinamentos Page
document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir modal específico
    function openModal(modalId) {
        // Fecha qualquer modal aberto primeiro
        closeModal();
        
        // Mostra o overlay
        const overlay = document.getElementById('rh-estratégico-overlay');
        if (overlay) overlay.style.display = 'block';
        
        // Mostra o modal solicitado
        const modal = document.getElementById(modalId + '-modal');
        if (modal) modal.style.display = 'block';
        
        // Desabilita scroll da página
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar modal
    function closeModal() {
        // Esconde o overlay
        const overlay = document.getElementById('rh-estratégico-overlay');
        if (overlay) overlay.style.display = 'none';
        
        // Esconde todos os modais
        const modals = document.querySelectorAll('.rh-estratégico-overlay');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        
        // Habilita scroll da página
        document.body.style.overflow = 'auto';
    }

    // Adiciona eventos de clique aos botões ovais
    const ovalButtons = document.querySelectorAll('.rh-estratégico-oval-button');
    ovalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/openModal\('(.*)'\)/);
                if (match && match[1]) {
                    openModal(match[1]);
                }
            }
        });
    });

     // Adiciona eventos de clique aos botões de fechar
     const closeButtons = document.querySelectorAll('.rh-estratégico-close-button-premium');
     closeButtons.forEach(button => {
         button.addEventListener('click', closeModal);
     });
 
     // Fecha modal ao clicar no overlay
     const overlay = document.getElementById('rh-estratégico-overlay');
     overlay.addEventListener('click', closeModal);
 
     // Fecha modal ao pressionar ESC
     document.addEventListener('keydown', function(event) {
         if (event.key === 'Escape') {
             closeModal();
         }
     });
 
     // Previne que o clique dentro do modal feche o mesmo
     const modals = document.querySelectorAll('.rh-estratégico-modal');
     modals.forEach(modal => {
         modal.addEventListener('click', function(event) {
             event.stopPropagation();
         });
     });
 });

// Funções globais para serem chamadas do HTML
function openModal(modalId) {
    // Mostra o overlay
    const overlay = document.getElementById('rh-estratégico-overlay');
    if (overlay) overlay.style.display = 'block';
    
    // Mostra o modal solicitado
    const modal = document.getElementById(modalId + '-modal');
    if (modal) modal.style.display = 'block';
    
    // Desabilita scroll da página
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Esconde o overlay
    const overlay = document.getElementById('rh-estratégico-overlay');
    if (overlay) overlay.style.display = 'none';
    
    // Esconde todos os modais
    const modals = document.querySelectorAll('.rh-estratégico-modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    // Habilita scroll da página
    document.body.style.overflow = 'auto';
}

//termina aqui RH estratégico//


//começa aqui contato

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !phone || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Validação simples de email
    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Aqui você pode adicionar o código para enviar o formulário
    // Por exemplo, usando fetch para uma API ou FormSubmit
    console.log('Formulário enviado:', { name, email, phone, message });
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    
    // Limpar o formulário após o envio
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}