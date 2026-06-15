'use client';

import {Card, CardContent, CardHeader, CardTitle} from "@/shared/ui/card";
import {Button} from "@/shared/ui/button";
import {Users, Mic, Volume2, Gamepad2, ChevronDown} from "lucide-react";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const serverId = "770237500764585985";

    // REFS -- РЕФЫ

    // Рефы для стрелки
    const arrowContainerRef = useRef(null);
    const arrowOuterRef = useRef(null);
    const arrowInnerRef = useRef(null);

    // Реф для виджета Discord
    const widgetSectionRef = useRef<HTMLDivElement>(null);


    // Рефы для hero секции
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    // Рефы для колонок
    const voiceChannelsCardRef = useRef(null);    // 👈 реф на карточку голосовых каналов
    const onlineMembersCardRef = useRef(null);    // 👈 реф на карточку участников онлайн

    // Рефы для Discord Widget секции
    const widgetTextRef = useRef(null);
    const widgetIframeRef = useRef(null);

    useEffect(() => {
        // Анимация hero секции
        const tl = gsap.timeline();

        tl.fromTo(titleRef.current,
            {y: 100, opacity: 0, scale: 0.8},
            {y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)"}
        )
            .fromTo(subtitleRef.current,
                {x: -50, opacity: 0},
                {x: 0, opacity: 1, duration: 0.8, ease: "power2.out"},
                "-=0.5"
            )
            .fromTo(buttonRef.current,
                {scale: 0, rotation: -180},
                {scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1)"},
                "-=0.3"
            )
            // Анимация карточек (выезжают слева и справа)
            .fromTo(voiceChannelsCardRef.current,
                {x: -100, opacity: 0, rotationY: -30},
                {x: 0, opacity: 1, rotationY: 0, duration: 0.7, ease: "power2.out"},
                "-=0.2"
            )
            .fromTo(onlineMembersCardRef.current,
                {x: 100, opacity: 0, rotationY: 30},
                {x: 0, opacity: 1, rotationY: 0, duration: 0.7, ease: "power2.out"},
                "-=0.5"
            )
            // Анимация Discord Widget секции
            .fromTo(widgetTextRef.current,
                {x: -50, opacity: 0},
                {x: 0, opacity: 1, duration: 0.6, ease: "back.out(0.8)"},
                "-=0.3"
            )
            .fromTo(widgetIframeRef.current,
                {scale: 0.9, opacity: 0, y: 30},
                {scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power2.out"},
                "-=0.4"
            )
            // 👇 СТРЕЛКА появляется ПОСЛЕ карточек
            .fromTo(arrowContainerRef.current,
                { opacity: 0, y: -30, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(0.8)" },
                "-=0.5"
            )

        // Бесконечная пульсация стрелки
        gsap.to(arrowOuterRef.current, {
            y: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        gsap.to(arrowInnerRef.current, {
            y: 15,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 0.2
        });

        // Анимация появления виджета Discord при скролле
        gsap.fromTo(widgetSectionRef.current,
            { opacity: 0, y: 100, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "back.out(0.6)",
                scrollTrigger: {
                    trigger: widgetSectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);


    const voiceChannels = [
        {name: "Create Voice", users: 4},
        {name: "123", users: 3},
        {name: "321", users: 2},
        {name: "913", users: 1},
        {name: "435", users: 1},
        {name: "дурка (не будите спящих)", users: 0},
        {name: "aFk", users: 0},
    ];

    const onlineMembers = [
        "7 (Никитка)", "miomokki (Eba)", "Airo", "axon (Лёша)",
        "Bazalex (Лёша)", "BlueWater (Стэс)", "Crowly (Витя)",
        "Dihydrogenmonoxide (Влад)", "DJ Андрей балконский"
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero секция */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h1 ref={titleRef}
                    className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    DD DYNASTY {`<3`}
                </h1>
                <p ref={subtitleRef} className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Friendly community for socialising and playing
                </p>
                <div ref={buttonRef}>
                    <Button size="lg" className="text-lg px-8 py-6">
                        Join rn
                    </Button>
                </div>
            </section>

            {/* Две колонки: голосовые каналы и участники */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Левая колонка: Голосовые каналы */}
                    <div ref={voiceChannelsCardRef} className="h-full">
                        <Card className="h-full flex flex-col">
                            <CardHeader className="flex-shrink-0">
                                <CardTitle className="flex items-center gap-2">
                                    <Mic className="w-5 h-5 text-green-500"/>
                                    Голосовые каналы
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="space-y-2">
                                    {voiceChannels.map((channel, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <Volume2 className="w-4 h-4 text-muted-foreground"/>
                                                <span className="text-sm">{channel.name}</span>
                                            </div>
                                            <span className="text-xs text-muted-foreground">
                                    {channel.users} 👥
                                </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Правая колонка: Участники онлайн */}
                    <div ref={onlineMembersCardRef} className="h-full">
                        <Card className="h-full flex flex-col">
                            <CardHeader className="flex-shrink-0">
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-green-500"/>
                                    MEMBERS ONLINE • {onlineMembers.length}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {onlineMembers.map((member, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-1 px-4 py-3 rounded-full text-xxs font-medium bg-secondary text-secondary-foreground"
                                        >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"/>
                                            {member}
                            </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Стрелка-разделитель */}
            <section ref={arrowContainerRef} className="container mx-auto px-4 py-8">
                <div className="flex justify-center">
                    <div ref={arrowOuterRef} className="relative cursor-pointer" onClick={() => {
                        widgetSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        {/* Внешняя стрелка (большая) */}
                        <ChevronDown className="w-12 h-12 text-primary/30" strokeWidth={1.5} />
                        {/* Внутренняя стрелка (маленькая) */}
                        <div ref={arrowInnerRef} className="absolute top-0 left-0">
                            <ChevronDown className="w-12 h-12 text-primary" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
                <p className="text-center text-muted-foreground text-sm mt-6 animate-pulse">
                    Scroll Down
                </p>
            </section>

            {/* Discord Widget секция */}
            <section ref={widgetSectionRef} className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Текст */}
                    <div ref={widgetTextRef} className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold mb-4">
                            Hangout with people who get it
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Присоединяйся к нашему Discord серверу и общайся с единомышленниками
                        </p>
                        <Button size="lg">
                            Join Discord
                        </Button>
                    </div>

                    {/* Виджет Discord */}
                    <div ref={widgetIframeRef} className="w-full">
                        <Card className="w-full">
                            <CardContent className="pt-6">
                                <iframe
                                    src={`https://discord.com/widget?id=${serverId}&theme=dark`}
                                    width="100%"
                                    height="500"
                                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                    title="Discord Widget"
                                    className="rounded-lg shadow-lg w-full"
                                />
                                <p className="text-muted-foreground text-sm text-center mt-4">
                                    Discord Widget
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}