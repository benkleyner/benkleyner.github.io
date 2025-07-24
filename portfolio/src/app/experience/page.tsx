"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Experience() {
  const [experiences, setExperiences] = useState<any[] | null>(null);
  useEffect(() => {
    fetch("/experience/experience-data.json")
      .then((res) => res.json())
      .then(setExperiences);
  }, []);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-2">Experience</h1>
      {!experiences ? (
        <div className="text-muted-foreground">Loading...</div>
      ) : (
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <Card key={i}>
              <CardHeader className="pb-2 flex flex-row items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-xl flex flex-col gap-1">
                    <span>{exp.role}</span>
                    <Link
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline text-base font-normal hover:text-primary/80"
                    >
                      {exp.company}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-1">{exp.date}</CardDescription>
                </div>
                {exp.logo && (
                  <div className="flex-shrink-0 flex items-center justify-center h-16 w-16">
                    <Image
                      src={exp.logo}
                      alt={exp.company + " logo"}
                      width={64}
                      height={64}
                      className="object-contain rounded"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <p className="mb-3 text-base text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((tech: string, j: number) => (
                    <span
                      key={j}
                      className="bg-muted text-foreground/80 rounded-full px-3 py-1 text-xs font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          <Link
            href="/BenjaminKleynerResume2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full" variant="outline">
              View Full Resume
            </Button>
          </Link>
        </div>
      )}
    </main>
  );
}
