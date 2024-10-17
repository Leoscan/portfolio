import Image from "next/image";
import me from "@/public/foto.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";

export function MainPage() {
    return (
        <>
            <Card className="grid grid-cols-1 lg:grid-cols-3 border-none bg-muted/100 mx-20">
                <div className="col-span-3 lg:col-span-1 w-full">
                    <Image
                        src={me}
                        alt="Leonardo Felix Scandura"
                        className="h-[300px] lg:h-[500px] object-cover rounded-lg w-full object-right"
                    />
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>

                            <BlurFade delay={0.25} inView>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Olá! 👋
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2} inView>
                                <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                                    Prazer em te conhecer
                                </span>
                            </BlurFade>

                        </CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4">
                        <BlurFade delay={0.25 * 4} inView>
                            <ul className="list-disc">
                                <li>
                                    Sou desenvolvedor de jogos, atualmente focado em projetos no Unity,
                                    onde exploro mecânicas, design e soluções criativas para trazer experiências
                                    imersivas ao jogador. Além do desenvolvimento de games, tenho sólida
                                    experiência em análise e engenharia de dados, bem como em desenvolvimento
                                    fullstack, utilizando PHP, HTML, CSS e bancos de dados relacionais.
                                </li>
                                <br />
                                <li>
                                    Estou sempre buscando expandir meu conhecimento em tecnologias que
                                    otimizem o desenvolvimento e a implementação de sistemas.
                                    Atualmente, estou cursando Ciência da Computação no Instituto Federal Catarinense,
                                    onde continuo aperfeiçoando minhas habilidades técnicas e explorando novas áreas.
                                </li>
                            </ul>
                        </BlurFade>
                        <BlurFade delay={0.25 * 5} inView>
                            <div className="flex space-x-5 pt-6">
                                <a href="mailto:leofelixscandura@gmail.com" target="_blank">
                                    <svg
                                        viewBox="0 0 1024 1024" fill="currentColor" className="h-8 w-8 hover:text-slate-600">
                                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/leoscan" target="_blank">
                                    <svg
                                        viewBox="0 0 1024 1024" fill="currentColor" className="h-8 w-8 hover:text-slate-600">
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/Leoscan" target="_blank">
                                    <svg
                                        viewBox="0 0 1024 1024" fill="currentColor" className="h-8 w-8 hover:text-slate-600">
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                                <a href="https://medium.com/@leofelixscandura" target="_blank">
                                    <svg
                                        viewBox="0 0 1024 1024" fill="currentColor" className="h-8 w-8 hover:text-slate-600">
                                        <path d="M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 01-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 016.8-17.2z" />
                                    </svg>
                                </a>
                            </div>
                        </BlurFade>
                    </CardContent>
                </div >
            </Card>

        </>
    );
}