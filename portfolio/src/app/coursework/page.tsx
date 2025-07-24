import CourseworkTimeline from "@/components/coursework-timeline";

export default function Coursework() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-2">Coursework</h1>
      <CourseworkTimeline />
    </main>
  );
}
