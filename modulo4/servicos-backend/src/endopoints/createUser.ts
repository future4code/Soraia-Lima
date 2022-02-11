// 3

import { Request, Response } from "express"
import connection from "../data/connection"

import { getAndressInfo } from "../services/getAndressInfo"
import { mailTransporter } from "../services/mailTransporter"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { cep, email, complemento } = req.body

    try {
        const result = await getAndressInfo(cep, email, complemento)

        // if (!cep || !email || !complemento) {
        //     res.status(404).send("Para realizar um novo cadastro é necessário informar cep, email e complemento do endereço")
        // }
        // console.log(result)
        if (!result) {
            throw new Error("Erro na requisição de pegar dados do usuário");
        }

        await connection('aula49_exercicio_andress')
            .insert({
                cep: result.cep,
                logradouro: result.logradouro,
                complemento: complemento,
                bairro: result.bairro,
                cidade: result.cidade,
                estado: result.estado,
                numero: "S/N",
                email: email
            })

        // DESAFIO
        const enviarEmail = await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Cadastro realizado com sucesso!",
            text: `Desejamos boas vindas a você! Estamos muito feliz em ter você aqui na nossa plataforma!
    Segue seus dados:
    cep: ${cep},
    logradouro: ${result?.logradouro},
    complemento: ${complemento},
    bairro: ${result?.bairro},
    cidade: ${result?.cidade},
    estado: ${result?.estado},
    email: ${email}
    Abraços, Soraia Entregas :)`,
            html: `<p> Desejamos boas vindas a você! Estamos muito feliz em ter você aqui na nossa plataforma!
    Segue seus dados:
    cep: ${cep},
    logradouro: ${result?.logradouro},
    complemento: ${complemento},
    bairro: ${result?.bairro},
    cidade: ${result?.cidade},
    estado: ${result?.estado},
    email: ${email}
    Abraços, Soraia Entregas :) </p>`
        })

        res.status(200).send("Usuário cadastrado com sucesso!")


    } catch (error: any) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}