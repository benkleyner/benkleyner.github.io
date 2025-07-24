"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  code: string;
  name: string;
  credits: number;
  description: string;
}

interface Semester {
  semester: string;
  gpa: number;
  courses: Course[];
}

export default function CourseworkTimeline() {
  const [data, setData] = useState<Semester[] | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetch("/coursework-data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return <div className="text-muted-foreground">Loading...</div>;
  }

  return (
    <div className="relative pl-8">
      {/* Vertical timeline line */}
      <div
        className="absolute left-3 top-0 bottom-0 w-0.5 bg-border z-0"
        aria-hidden="true"
      />
      <ol className="flex flex-col gap-10">
        {data.map((semester, i) => (
          <li key={i} className="relative">
            {/* Timeline dot */}
            <span
              className="absolute -left-5 top-6 w-4 h-4 rounded-full border-4 border-background bg-primary z-10 shadow"
              aria-hidden="true"
            />
            <Card className="pl-2 relative z-20">
              <CardHeader
                className="flex flex-row items-center justify-between cursor-pointer select-none px-4 py-3"
                onClick={() =>
                  setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))
                }
              >
                <div className="flex flex-col gap-0.5">
                  <CardTitle className="text-xl flex flex-row gap-2 items-center">
                    {semester.semester}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    GPA: {semester.gpa}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  tabIndex={-1}
                  aria-label={
                    expanded[i]
                      ? `Collapse ${semester.semester}`
                      : `Expand ${semester.semester}`
                  }
                >
                  <span
                    className={`transition-transform text-lg ${
                      expanded[i] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </Button>
              </CardHeader>
              {expanded[i] && (
                <CardContent className="pt-0 pb-2">
                  <ul className="flex flex-col gap-4 mt-2">
                    {semester.courses.map((course, j) => (
                      <li key={j} className="relative">
                        <div className="ml-2 pl-4 border-l-2 border-border">
                          <div className="flex flex-row items-baseline gap-2">
                            <span className="font-mono text-primary text-base min-w-[4.5rem]">
                              {course.code}
                            </span>
                            <span className="font-semibold text-base">
                              {course.name}
                            </span>
                            <span className="ml-2 text-xs text-muted-foreground">
                              {course.credits} units
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1 pl-1">
                            {course.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
