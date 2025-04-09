"use client";

import styles from "./entreEmContato.module.css"
import { useState } from "react";
import { validateEmail, formatPhoneNumber, validatePhoneNumber } from "./validationUtils";

export default function EntreEmContato() {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        mensagem: "",
    });

    const [errors, setErrors] = useState({
        telefone: "",
        email: "",
    });

    const [status, setStatus] = useState(""); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === "telefone") {
            formattedValue = formatPhoneNumber(value);
        }

        setFormData((prev) => ({ ...prev, [name]: formattedValue }));

        if (name === "email") {
            setErrors((prev) => ({
                ...prev,
                email: validateEmail(value) ? "" : "E-mail inválido",
            }));
        }

        if (name === "telefone") {
            setErrors((prev) => ({
                ...prev,
                telefone: validatePhoneNumber(value) ? "" : "Telefone inválido",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nome, telefone, email, mensagem } = formData;

        if (!nome || !telefone || !email || !mensagem) {
            setStatus("Preencha todos os campos antes de enviar.");
            return;
        }

        if (errors.email || errors.telefone) {
            setStatus("Corrija os erros antes de enviar.");
            return;
        }

        try {
            const res = await fetch("/api/sendemail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("Mensagem enviada com sucesso!");
                setFormData({ nome: "", telefone: "", email: "", mensagem: "" });
            } else {
                setStatus(`Erro: ${data.message || "Não foi possível enviar."}`);
            }
        } catch (err) {
            setStatus("Erro de conexão. Tente novamente mais tarde.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.container}>
                <h1>Entre em Contato</h1>
                <div className={styles.smalltextbox}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            padding: "0 0.5rem",
                            color: "#A7A9AC"
                        }}
                    />
                </div>
                <div className={styles.smalltextbox}>
                    <input
                        type="text"
                        name="telefone"
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        maxLength={15}
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            padding: "0 0.5rem",
                            color: "#A7A9AC"
                        }}
                    />
                    {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
                </div>
                <div className={styles.smalltextbox}>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            padding: "0 0.5rem",
                            color: "#A7A9AC"
                        }}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.bigtextbox}>
                    <textarea
                        name="mensagem"
                        placeholder="Mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            padding: "0.5rem",
                            resize: "none",
                            color: "#A7A9AC"
                        }}
                    ></textarea>
                </div>
                {status && (
                    <p style={{ color: status.startsWith("Erro") ? "red" : "green" }}>
                        {status}
                    </p>
                )}
                <div className={styles.sendButton}>
                    <button
                        type="submit"
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        </form>
    );
}
