import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PostsCardData } from "../lib/IPosts";
import Image from "next/image";
import BoxReveal from "@/components/ui/box-reveal";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

export default function PostCard({ title, _id, imageUrl, description, link }: PostsCardData) {
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

                        <div className="mt-3">
                            <BoxReveal boxColor={"#221e1e"} duration={0.7}>
                                <CardDescription className="line-clamp-4">{description}</CardDescription>
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
