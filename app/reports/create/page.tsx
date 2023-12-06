import Form from "@/app/ui/reports/create-form";
import { fetchCategories } from "@/app/lib/data";

export default async function Page() {
  const categories = await fetchCategories();
  return (
    <div>
      <Form categories={categories} />
    </div>
  );
}
