import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Database,
  Banknote,
  CheckCircle2,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  Landmark,
  Leaf,
  Mail,
  Menu,
  Moon,
  Scale,
  Sprout,
  Sun,
  Trees,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PORTRAIT } from "./portrait";
import {
  AGENCY_URL,
  CIRCULAR43_URL,
  CIRCULAR31_URL,
  DECREE_URL,
  EMAIL,
  FACEBOOK,
  HANDBOOK_URL,
  SECTOR_REPORT_URL,
  content,
  type Content,
  type Lang,
  type SkillKey,
} from "./content";

const SECTIONS = ["about", "expertise", "projects", "experience", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

const SKILL_ICONS: Record<SkillKey, typeof Leaf> = {
  finance: Banknote,
  pfes: Sprout,
  carbon: Leaf,
  biodiversity: Trees,
  law: Scale,
  digital: Cpu,
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/* Keep legal document numbers like "31/2026/TT-BNNMT" on one line */
function DocText({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className={w.includes("/") ? "whitespace-nowrap" : undefined}>
          {i > 0 ? " " : ""}
          {w}
        </span>
      ))}
    </>
  );
}

/* ---------- hooks ---------- */

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useScrollState() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      setScrolled(y > 24);
      let current: SectionId | null = null;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { active, progress, scrolled };
}

/* ---------- small building blocks ---------- */

function SectionHeading({ eyebrow, title, intro, light }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="reveal max-w-2xl">
      <div className={cn("flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]", light ? "text-[#BFE6CC]" : "text-primary")}>
        <span className={cn("h-px w-8", light ? "bg-[#BFE6CC]" : "bg-primary")} aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className={cn("mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl", light ? "text-white" : "text-heading")}>{title}</h2>
      {intro && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-[#D3EADB]" : "text-muted-foreground")}>{intro}</p>}
    </div>
  );
}

function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

/* ---------- header ---------- */

function Header({ t, lang, dark, onLang, onTheme }: { t: Content; lang: Lang; dark: boolean; onLang: () => void; onTheme: () => void }) {
  const { active, progress, scrolled } = useScrollState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3" aria-label="Phạm Hồng Lượng">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-sm font-bold tracking-wide text-white" aria-hidden="true">
            PHL
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold text-heading">Phạm Hồng Lượng</span>
            <span className="hidden text-xs text-muted-foreground sm:block">{lang === "vi" ? "Phó Cục trưởng" : "Deputy Director General"}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={cn(
                "relative rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:text-primary",
                active === id ? "text-primary" : "text-foreground/80"
              )}
            >
              {t.nav[id]}
              <span className={cn("absolute inset-x-3 -bottom-[15px] h-0.5 bg-primary transition-transform duration-300", active === id ? "scale-x-100" : "scale-x-0")} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onLang} aria-label={t.a11y.lang} className="h-10 min-w-[44px] font-bold">
            {t.langShort}
          </Button>
          <Button variant="outline" size="icon" onClick={onTheme} aria-label={t.a11y.theme} className="h-10 w-10">
            {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? t.a11y.close : t.a11y.menu} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <Container className="flex flex-col py-2">
            {SECTIONS.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={cn("border-b py-3.5 text-base last:border-0", active === id ? "font-bold text-primary" : "text-foreground")}>
                {t.nav[id]}
              </a>
            ))}
          </Container>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}

/* ---------- hero ---------- */

function Hero({ t }: { t: Content }) {
  return (
    <section id="top" className="relative overflow-hidden bg-forest-deep text-white">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <svg aria-hidden="true" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-[0.13]">
        <g fill="none" stroke="#9FD8B1" strokeWidth="1.1">
          {Array.from({ length: 9 }).map((_, i) => {
            const o = i * 52;
            return <path key={i} d={`M-40 ${560 - o} C 180 ${480 - o}, 320 ${600 - o}, 520 ${510 - o} S 860 ${420 - o}, 1060 ${490 - o} S 1360 ${560 - o}, 1500 ${470 - o}`} />;
          })}
        </g>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 1440 200" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-28 w-full text-forest-ink opacity-60">
        <path fill="currentColor" d="M0 200 L0 140 L40 112 L70 130 L110 84 L150 120 L190 74 L230 116 L270 64 L320 112 L360 88 L400 126 L450 56 L500 108 L540 84 L590 122 L640 70 L690 112 L730 94 L780 130 L830 66 L880 110 L920 86 L970 126 L1020 60 L1070 108 L1110 82 L1160 122 L1210 68 L1260 112 L1300 92 L1350 128 L1400 80 L1440 112 L1440 200 Z" />
      </svg>

      <Container className="relative grid items-center gap-14 pb-28 pt-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-24">
        <div className="lg:col-span-7">
          <div className="hero-in text-xs font-bold uppercase tracking-[0.18em] text-[#BFE6CC]">
            {t.hero.eyebrow}
          </div>
          <h1 className="hero-in hero-name mt-7 text-[34px] font-bold uppercase leading-[1.2] sm:text-[50px] lg:whitespace-nowrap lg:text-[44px] xl:text-[52px]" style={{ animationDelay: ".08s" }}>
            Phạm Hồng Lượng
          </h1>
          <div className="hero-in mt-6 border-l-2 border-[#5CC98A] pl-4" style={{ animationDelay: ".16s" }}>
            <p className="text-lg font-bold text-white sm:text-xl">{t.hero.role}</p>
            <p className="mt-1 text-base text-[#CFE8D8]">{t.hero.ministry}</p>
          </div>
          <p className="hero-in mt-7 max-w-xl text-base leading-relaxed text-[#D3EADB] sm:text-lg" style={{ animationDelay: ".24s" }}>
            {t.hero.intro}
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".32s" }}>
            <Button asChild size="lg" className="h-12 bg-white px-7 text-base font-bold text-forest-deep shadow-none hover:bg-[#E8F3EC]">
              <a href="#contact">
                {t.hero.ctaContact}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-white/50 bg-transparent px-7 text-base font-bold text-white hover:bg-white/10 hover:text-white">
              <a href="#projects">{t.hero.ctaProjects}</a>
            </Button>
          </div>

          <dl className="hero-in mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 sm:gap-6" style={{ animationDelay: ".4s" }}>
            {t.hero.facts.map((f) => (
              <div key={f.big}>
                <dt className="text-xl font-bold text-white sm:text-2xl">{f.big}</dt>
                <dd className="mt-1 text-xs leading-snug text-[#CFE8D8] sm:text-sm">{f.small}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in relative order-first mx-auto w-full max-w-[280px] sm:max-w-[360px] lg:order-none lg:col-span-5 lg:mr-0 lg:max-w-[400px]" style={{ animationDelay: ".2s" }}>
          <div className="absolute -inset-3 rounded-t-[216px] rounded-b-[20px] border-2 border-[#BFE6CC]/50 sm:-inset-4" aria-hidden="true" />
          <figure className="relative aspect-[4/5] overflow-hidden rounded-t-[200px] rounded-b-xl bg-forest-ink shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            <img src={PORTRAIT} alt={t.a11y.portrait} className="h-full w-full object-cover object-top" width={960} height={1200} />
          </figure>
        </div>
      </Container>
    </section>
  );
}

/* ---------- about + expertise ---------- */

function About({ t }: { t: Content }) {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        </div>
        <div className="reveal space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[17px] lg:col-span-7">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="mt-8 rounded-lg border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-heading">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
              {t.about.eduTitle}
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {t.about.edu.map((e) => (
                <li key={e} className="border-l-2 border-primary pl-3 text-[15px] font-medium leading-snug text-foreground">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Expertise({ t }: { t: Content }) {
  return (
    <section id="expertise" className="border-t bg-secondary/60 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.expertise.eyebrow} title={t.expertise.title} intro={t.expertise.intro} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.expertise.items.map((s, i) => {
            const Icon = SKILL_ICONS[s.key];
            return (
              <article key={s.key} className="reveal group relative bg-card p-7 transition-colors duration-300 hover:bg-accent/60" style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold tabular-nums text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-heading">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-sm border border-border bg-background font-medium text-foreground/80 shadow-none hover:bg-background">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ---------- projects ---------- */

function Projects({ t }: { t: Content }) {
  const p = t.projects;
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <article className="reveal group relative mt-12 overflow-hidden rounded-lg bg-forest-deep text-white">
          <div className="grain absolute inset-0" aria-hidden="true" />
          <div className="relative grid gap-8 p-5 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#BFE6CC]">
                <Landmark className="h-3.5 w-3.5" aria-hidden="true" />
                {p.featuredLabel}
              </span>
              <h3 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">{p.featured.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#D3EADB]"><DocText text={p.featured.desc} /></p>
              <a
                href={DECREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-forest-deep transition-colors hover:bg-[#E8F3EC]"
              >
                <span><DocText text={p.featured.link} /></span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <ul className="min-w-0 space-y-3 lg:col-span-5">
              {p.featured.docs.map((d, i) => (
                <li key={d}>
                  <a
                    href={i === 0 ? DECREE_URL : CIRCULAR31_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[52px] items-center gap-3 rounded-md border border-white/15 bg-white/5 px-3 py-3.5 text-sm font-bold sm:px-4 sm:text-[15px] text-white transition-colors hover:border-white/40 hover:bg-white/10"
                  >
                    <FileText className="h-5 w-5 shrink-0 text-[#9FD8B1]" aria-hidden="true" />
                    <span className="flex-1"><DocText text={d} /></span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#9FD8B1]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="reveal group mt-6 grid gap-6 rounded-lg border bg-accent/50 p-5 transition-colors duration-300 hover:border-primary/60 sm:p-9 md:grid-cols-12 md:items-center">
          <div className="flex min-w-0 items-start gap-5 md:col-span-8">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground sm:flex">
              <Database className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">{p.data.tag}</span>
              <h3 className="mt-2 text-xl font-bold leading-snug text-heading sm:text-2xl">{p.data.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground"><DocText text={p.data.desc} /></p>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-3 md:col-span-4 md:items-end">
            <span className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-3 text-[15px] font-bold text-foreground">
              <FileText className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span><DocText text={p.data.doc} /></span>
            </span>
            <a
              href={CIRCULAR43_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              <span><DocText text={p.data.link} /></span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {p.items.map((it, i) => (
            <article
              key={it.title}
              className="reveal group relative flex flex-col rounded-lg border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_40px_-12px_rgba(13,92,44,0.25)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-lg bg-primary transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{it.tag}</span>
                <span className="text-3xl font-bold tabular-nums text-muted-foreground/25">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-heading">{it.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{it.desc}</p>
              {it.link ? (
                <a href={it.link === "report" ? SECTOR_REPORT_URL : HANDBOOK_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-primary hover:underline">
                  {it.link === "report" ? p.report : p.pdf}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- experience ---------- */

function Experience({ t }: { t: Content }) {
  const e = t.experience;
  return (
    <section id="experience" className="border-t bg-secondary/60 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={e.eyebrow} title={e.title} intro={e.intro} />
          </div>
        </div>
        <ol className="relative lg:col-span-7">
          <span className="absolute bottom-3 left-[11px] top-3 w-px bg-border" aria-hidden="true" />
          {e.items.map((it, i) => (
            <li key={it.time} className="reveal relative pb-12 pl-12 last:pb-0" style={{ transitionDelay: `${i * 80}ms` }}>
              <span
                className={cn(
                  "absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background",
                  i === 0 && "bg-primary"
                )}
                aria-hidden="true"
              >
                {i === 0 && <span className="h-2 w-2 animate-pulse rounded-full bg-primary-foreground" />}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-wider text-primary">{it.time}</span>
                {i === 0 && (
                  <Badge className="rounded-sm bg-primary/10 text-primary shadow-none hover:bg-primary/10">{e.current}</Badge>
                )}
              </div>
              <div className="mt-3 rounded-lg border bg-card p-6 transition-shadow duration-300 hover:shadow-md">
                <h3 className="text-xl font-bold text-heading">{it.title}</h3>
                <p className="mt-1 text-[15px] font-medium text-foreground/80">{it.org}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------- slogan band ---------- */

function SloganBand({ t }: { t: Content }) {
  return (
    <section aria-label={t.slogan} className="relative overflow-hidden bg-forest py-16 text-white sm:py-20">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <Container className="reveal relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <Leaf className="h-10 w-10 shrink-0 text-[#BFE6CC]" aria-hidden="true" />
        <p className="flex-1 text-2xl font-bold leading-snug sm:text-3xl">{t.slogan}</p>
        <p className="text-sm text-white md:max-w-[220px] md:text-right">{t.agency}</p>
      </Container>
    </section>
  );
}

/* ---------- contact ---------- */

type Form = { name: string; email: string; message: string };
const EMPTY: Form = { name: "", email: "", message: "" };

function validate(f: Form) {
  const email = f.email.trim();
  return {
    name: f.name.trim().length < 2,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email),
    emailEmpty: email.length === 0,
    message: f.message.trim().length < 10,
  };
}

function Contact({ t, lang }: { t: Content; lang: Lang }) {
  const c = t.contact;
  const [form, setForm] = useState<Form>(EMPTY);
  const [tried, setTried] = useState(false);
  const [sent, setSent] = useState(false);
  const v = useMemo(() => validate(form), [form]);

  const mailto = useMemo(() => {
    const body = `${c.form.bodyName}: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(`${c.form.subject} - ${form.name.trim()}`)}&body=${encodeURIComponent(body)}`;
  }, [form, c.form]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (v.name || v.email || v.message) {
      setTried(true);
      const first = v.name ? "f-name" : v.email ? "f-email" : "f-message";
      document.getElementById(first)?.focus();
      return;
    }
    setSent(true);
    setTried(false);
  };

  const err = (k: "name" | "email" | "message") => tried && v[k];
  const set = (k: keyof Form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const channels = [
    { href: `mailto:${EMAIL}`, label: c.emailLabel, value: EMAIL, icon: <Mail className="h-5 w-5" aria-hidden="true" />, ext: false },
    { href: FACEBOOK, label: c.fbLabel, value: "Phạm Hồng Lượng", icon: <FacebookIcon className="h-5 w-5" />, ext: true },
    { href: AGENCY_URL, label: c.agencyLabel, value: "vnforest.gov.vn", icon: <Globe className="h-5 w-5" aria-hidden="true" />, ext: true },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
          <ul className="reveal mt-10 divide-y border-y">
            {channels.map((ch) => (
              <li key={ch.label}>
                <a
                  href={ch.href}
                  {...(ch.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex min-h-[64px] items-center gap-4 py-4 transition-colors hover:text-primary"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {ch.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">{ch.label}</span>
                    <span className="block break-words font-bold">{ch.value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal lg:col-span-7">
          <div className="rounded-lg border bg-card p-6 shadow-sm sm:p-10">
            {!sent ? (
              <form onSubmit={submit} noValidate className="space-y-6" lang={lang}>
                <h3 className="text-xl font-bold text-heading">{c.form.title}</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="f-name" className="font-bold">
                      {c.form.name} <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="f-name"
                      autoComplete="name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder={c.form.phName}
                      aria-invalid={err("name") || undefined}
                      aria-describedby={err("name") ? "e-name" : undefined}
                      className={cn("h-12 text-base", err("name") && "border-destructive focus-visible:ring-destructive")}
                    />
                    {err("name") && <p id="e-name" className="text-sm text-destructive">{c.form.errName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="f-email" className="font-bold">
                      {c.form.email} <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="f-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder={c.form.phEmail}
                      aria-invalid={err("email") || undefined}
                      aria-describedby={err("email") ? "e-email" : undefined}
                      className={cn("h-12 text-base", err("email") && "border-destructive focus-visible:ring-destructive")}
                    />
                    {err("email") && <p id="e-email" className="text-sm text-destructive">{v.emailEmpty ? c.form.errEmailEmpty : c.form.errEmailBad}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="f-message" className="font-bold">
                    {c.form.message} <span className="text-destructive" aria-hidden="true">*</span>
                  </Label>
                  <Textarea
                    id="f-message"
                    rows={6}
                    value={form.message}
                    onChange={set("message")}
                    placeholder={c.form.phMessage}
                    aria-invalid={err("message") || undefined}
                    aria-describedby={err("message") ? "e-message" : undefined}
                    className={cn("min-h-[160px] resize-y text-base", err("message") && "border-destructive focus-visible:ring-destructive")}
                  />
                  {err("message") && <p id="e-message" className="text-sm text-destructive">{c.form.errMessage}</p>}
                </div>
                <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm text-muted-foreground">{c.form.required}</span>
                  <Button type="submit" size="lg" className="h-12 w-full px-8 text-base font-bold sm:w-auto">
                    {c.form.submit}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </form>
            ) : (
              <div role="status" className="flex flex-col items-start gap-5 py-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-bold text-heading">{c.form.okTitle}</h3>
                <p className="text-base text-muted-foreground">{c.form.okText}</p>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button asChild size="lg" className="h-12 px-7 font-bold">
                    <a href={mailto}>
                      <Mail className="mr-1 h-4 w-4" aria-hidden="true" />
                      {c.form.openMail}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-7"
                    onClick={() => {
                      setSent(false);
                      setForm(EMPTY);
                    }}
                  >
                    {c.form.again}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer({ t }: { t: Content }) {
  return (
    <footer className="bg-forest-ink text-[#CFE8D8]">
      <Container className="py-12">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-sm font-bold text-white" aria-hidden="true">PHL</span>
              <span className="text-lg font-bold text-white">Phạm Hồng Lượng</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed">{t.agency}</p>
            <p className="mt-2 text-base font-bold text-white">{t.slogan}</p>
          </div>
          <nav aria-label={t.footer.nav} className="flex flex-wrap gap-x-6 text-sm">
            {SECTIONS.map((id) => (
              <a key={id} href={`#${id}`} className="inline-flex min-h-[44px] items-center hover:text-white hover:underline">
                {t.nav[id]}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Phạm Hồng Lượng. {t.footer.rights}
          </span>
          <a href="#top" className="inline-flex min-h-[44px] items-center gap-1.5 hover:text-white">
            {t.footer.top}
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

/* ---------- back to top ---------- */

function BackToTop({ label }: { label: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 800);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <a
      href="#top"
      aria-label={label}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5",
        show ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

/* ---------- app ---------- */

function initialDark() {
  try {
    const saved = localStorage.getItem("phl-theme");
    if (saved) return saved === "dark";
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("phl-lang");
    if (saved === "vi" || saved === "en") return saved;
  } catch {
    /* storage unavailable */
  }
  return "vi";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [dark, setDark] = useState<boolean>(initialDark);
  const t = content[lang] as Content;

  useReveal();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("phl-theme", dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("phl-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return (
    <div className="min-h-screen">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        {lang === "vi" ? "Bỏ qua đến nội dung" : "Skip to content"}
      </a>
      <Header t={t} lang={lang} dark={dark} onLang={() => setLang((l) => (l === "vi" ? "en" : "vi"))} onTheme={() => setDark((d) => !d)} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Expertise t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <SloganBand t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
      <BackToTop label={t.a11y.top} />
    </div>
  );
}
