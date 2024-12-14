import React, { useState } from 'react';
import './Commands.css';
import { save } from '../../services/CommandsService';
import { toast } from 'react-toastify';

const Commands = () => {
    const [comandasEmFechamento] = useState(['Comanda 1', 'Comanda 2', 'Comanda 3']);
    const [comandasDisponiveis] = useState([4, 5, 6]);

    const [modalAberto, setModalAberto] = useState(false);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setNome('');
        setDescricao('');
    };

    const abrirComanda = async () => {
        const commandData = {
            nome,
            descricao,
        };

        console.log(commandData);

        try {
            await save(commandData);
            toast.success("Comanda salva com sucesso!");

        } catch (error) {
            toast.error("Erro ao salvar o comanda!");
            console.error("Erro ao fazer requisição:", error);
        }
        fecharModal();
    };

    return (
        <div className="commands comanda-container">
            <div className="comandas-selecionadas">
                <span className="titulo">Comanda Selecionada</span>
                <button className="adicionar-item" /*onClick={}*/>+ Adicionar Item</button>
            </div>

            <div className="comandas-fechamento">
                <span className="titulo">Comandas em Fechamento</span>
                <p id="quantidade-comandas-fechamento">{comandasEmFechamento.length} Comandas em fechamento</p>
                <ul id="comandas-fechamento-list">
                    {comandasEmFechamento.map((comanda, index) => (
                        <li key={index}>{comanda}</li>
                    ))}
                </ul>
            </div>

            <div className="adicionar-comanda">
                <span className="titulo">Adicionar Comanda</span>
                <ul id="comandas-lista">
                    <li className="comanda-item" onClick={abrirModal}>+ Cadastrar Comanda</li>
                    {comandasDisponiveis.map((comanda, index) => (
                        <li key={index} className="comanda-item">
                            Comanda {comanda}
                        </li>
                    ))}
                </ul>
            </div>

            {modalAberto && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Nova Comanda</h2>
                            <span className="modal-title">Cadastrar Comanda</span>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <label htmlFor="nome-cliente">Nome do Cliente</label>
                                <div className="input-with-icon">
                                    <input
                                        type="text"
                                        id="nome-cliente"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        placeholder="Digite o nome do cliente"
                                    />
                                    <i className="icon-user">+user</i>
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="observacao">Observação</label>
                                <textarea
                                    id="observacao"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    placeholder="Digite uma observação"
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="cancelar-btn" onClick={fecharModal}>Cancelar</button>
                            <button className="abrir-btn" onClick={abrirComanda}>Abrir Comanda</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Commands;
