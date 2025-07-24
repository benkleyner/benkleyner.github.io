"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// For EmBrnt, list the image URLs for each slide (exported from the PDF)
const embrntSlides = [
  "/embrnt/embrnt.jpeg",
  "/embrnt/embrnt 2.jpeg",
  "/embrnt/embrnt 3.jpeg",
  "/embrnt/embrnt 4.jpeg",
  "/embrnt/embrnt 5.jpeg",
  "/embrnt/embrnt 6.jpeg",
  "/embrnt/embrnt 7.jpeg",
  "/embrnt/embrnt 8.jpeg",
  "/embrnt/embrnt 9.jpeg",
  "/embrnt/embrnt 10.jpeg",
  "/embrnt/embrnt 11.jpeg",
  "/embrnt/embrnt 12.jpeg",
  "/embrnt/embrnt 13.jpeg",
  "/embrnt/embrnt 14.jpeg",
  "/embrnt/embrnt 15.jpeg",
  "/embrnt/embrnt 16.jpeg",
  "/embrnt/embrnt 17.jpeg",
];

export default function Projects() {
  const [projects, setProjects] = useState<any[] | null>(null);
  const [embrntPage, setEmbrntPage] = useState(0);

  useEffect(() => {
    fetch("/projects-data.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <main className="w-full py-12 px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-left">Projects</h1>
        {!projects ? (
          <div className="text-muted-foreground">Loading...</div>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:justify-start w-full">
            {projects.map((proj, i) => (
              <Card key={i} className="w-full lg:w-[650px] flex-shrink-0">
                <CardHeader className="pb-2 flex flex-row items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xl flex flex-col gap-1">
                      <span>{proj.title}</span>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {proj.date}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  {/* EmBrnt slideshow as images */}
                  {proj.title.includes("EmBrnt") && (
                    <div className="mb-4 flex flex-col items-center">
                      <div
                        className="border rounded shadow overflow-hidden bg-white flex items-center justify-center"
                        style={{ height: 400, width: 600 }}
                      >
                        <Image
                          src={embrntSlides[embrntPage]}
                          alt={`EmBrnt Slide ${embrntPage + 1}`}
                          width={600}
                          height={400}
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setEmbrntPage((p) => Math.max(0, p - 1))
                          }
                          disabled={embrntPage === 0}
                        >
                          Previous
                        </Button>
                        <span className="text-sm">
                          Slide {embrntPage + 1} / {embrntSlides.length}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setEmbrntPage((p) =>
                              Math.min(embrntSlides.length - 1, p + 1)
                            )
                          }
                          disabled={embrntPage === embrntSlides.length - 1}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  )}
                  {/* Fallback for other projects: image or nothing */}
                  {proj.image && (
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={proj.image}
                        alt={proj.title + " image"}
                        width={600}
                        height={400}
                        className="rounded shadow object-contain"
                      />
                    </div>
                  )}
                  <p className="mb-3 text-base text-muted-foreground">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.tech.map((tech: string, j: number) => (
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
          </div>
        )}
      </div>
    </main>
  );
}
