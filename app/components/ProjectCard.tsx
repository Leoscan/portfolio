import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ProjectsCardData } from "../lib/IProjects";
import Image from "next/image";
import BoxReveal from "@/components/ui/box-reveal";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ title, imageUrl, tags, description, link }: ProjectsCardData) {


    return (
        <div>
            <a href={link} target="_blank">
                <Card className="border-none bg-muted/100 h-full">
                    <div>
                        <BlurFade key={imageUrl} delay={0.25} inView>
                            <Image src={imageUrl} alt={title} width={1000} height={200} className="w-full h-52 object-cover rounded-t-md"
                            />
                        </BlurFade>
                    </div>
                    <CardContent>
                        <div className="mt-5">
                            <BoxReveal boxColor={"#221e1e"} duration={0.6}>
                                <CardTitle>{title}</CardTitle>
                            </BoxReveal>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                            <BoxReveal boxColor={"#221e1e"} duration={0.7}>
                                <div>
                                    {tags.map((tagItem, index) => (
                                        <p key={index}
                                            className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-light text-primary"
                                        >
                                            {tagItem}
                                        </p>
                                    ))}
                                </div>
                            </BoxReveal>
                        </div>

                        <div className="mt-3">
                            <BoxReveal boxColor={"#221e1e"} duration={0.7}>
                                <CardDescription >{description}</CardDescription>
                            </BoxReveal>
                        </div>
                        <div className="mt-3">
                            <BoxReveal boxColor={"#221e1e"} duration={0.7}>
                                <Button>
                                    Explorar
                                </Button>
                            </BoxReveal>
                        </div>
                    </CardContent>
                </Card>
            </a>
        </div >
    )
}
