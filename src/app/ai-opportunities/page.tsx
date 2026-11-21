import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, DatabaseIcon, MessageSquareTextIcon, TargetIcon } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI opportunity map",
  description: "Which ParkSmart activities use AI — No AI, Traditional ML, GenAI or Both — and why.",
};

type Approach = "No AI" | "ML" | "GenAI" | "Both";
const APPROACHES: Approach[] = ["No AI", "ML", "GenAI", "Both"];

const ACTIVITIES: { activity: string; approach: Approach; why: string }[] = [
  { activity: "User registration & login", approach: "No AI", why: "Simple database process." },
  { activity: "Search for parking spaces", approach: "GenAI", why: "Understands user requests in natural language." },
  { activity: "Predict parking availability", approach: "ML", why: "Predicts available spots using past data." },
  { activity: "Recommend parking spots", approach: "Both", why: "ML recommends, GenAI explains." },
  { activity: "Book parking spaces", approach: "No AI", why: "Simple reservation process." },
  { activity: "Process payments", approach: "No AI", why: "Uses a secure payment system." },
  { activity: "Navigate to parking", approach: "No AI", why: "Uses GPS & maps." },
  { activity: "Manage parking prices", approach: "ML", why: "Predicts demand to suggest prices." },
];

const APPROACH_STYLE: Record<Approach, string> = {
  "No AI": "bg-muted text-muted-foreground",
  ML: "bg-teal/15 text-teal-strong",
  GenAI: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  Both: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
};

export default function AiOpportunitiesPage() {
  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-14 px-4 py-12 sm:px-6">
        <header>
          <p className="text-sm font-semibold tracking-wide text-teal-strong uppercase">APP203 · Final Project Workshop</p>
          <h1 className="mt-2 text-4xl font-bold">AI opportunity mapping</h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
            For each ParkSmart activity we decided whether it benefits from No AI, Traditional ML, GenAI or Both, and why. Then we built out one of those
            opportunities: predicting parking availability.
          </p>
        </header>

        <section aria-labelledby="activities-title" className="space-y-4">
          <h2 id="activities-title" className="text-2xl font-semibold">
            Which activities could use AI?
          </h2>

          {/* Desktop / tablet: full table */}
          <div className="hidden overflow-hidden rounded-2xl border bg-card md:block">
            <table className="w-full text-sm">
              <thead className="bg-navy text-navy-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">Business activity</th>
                  {APPROACHES.map((a) => (
                    <th key={a} scope="col" className="w-20 px-2 py-3 text-center font-semibold">{a}</th>
                  ))}
                  <th scope="col" className="px-4 py-3 text-left font-semibold">Why?</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {ACTIVITIES.map((row) => (
                  <tr key={row.activity}>
                    <th scope="row" className="px-4 py-3 text-left font-medium">{row.activity}</th>
                    {APPROACHES.map((a) => (
                      <td key={a} className="px-2 py-3 text-center">
                        {row.approach === a ? (
                          <span className="inline-flex size-6 items-center justify-center rounded-md bg-teal text-teal-foreground" aria-label="Selected">
                            <CheckIcon className="size-4" aria-hidden />
                          </span>
                        ) : (
                          <span className="inline-block size-6 rounded-md border" aria-hidden />
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-muted-foreground">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <ul className="grid gap-3 md:hidden">
            {ACTIVITIES.map((row) => (
              <li key={row.activity} className="rounded-2xl border bg-card p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium">{row.activity}</p>
                  <span className={cn("shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold", APPROACH_STYLE[row.approach])}>{row.approach}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{row.why}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="build-title" className="space-y-6">
          <div>
            <p className="text-sm font-semibold tracking-wide text-teal-strong uppercase">Part C — Build on one of the above</p>
            <h2 id="build-title" className="mt-1 text-2xl font-semibold">
              Activity: Predict parking availability using AI
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-6">
              <TargetIcon className="size-6 text-teal-strong" aria-hidden />
              <h3 className="mt-3 font-semibold">What problem are we solving?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Drivers waste time searching for available parking spaces. ParkSmart helps users find parking faster and reduces traffic and frustration.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <DatabaseIcon className="size-6 text-teal-strong" aria-hidden />
              <h3 className="mt-3 font-semibold">Traditional ML — data we need</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Historical parking availability</li>
                <li>Parking locations</li>
                <li>Booking history</li>
                <li>Time of day</li>
                <li>Day of the week</li>
                <li>Parking demand</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <MessageSquareTextIcon className="size-6 text-teal-strong" aria-hidden />
              <h3 className="mt-3 font-semibold">GenAI — information & prompts</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>User location</li>
                <li>Destination</li>
                <li>Parking preferences</li>
                <li>Available spaces</li>
              </ul>
              <p className="mt-3 rounded-lg bg-muted px-3 py-2 text-sm italic">“Find me affordable parking near my destination.”</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/find" className={buttonVariants({ variant: "teal" })}>
              Try the availability prediction <ArrowRightIcon />
            </Link>
            <Link href="/#how-ai-helps" className={buttonVariants({ variant: "outline" })}>
              How AI helps in ParkSmart
            </Link>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
