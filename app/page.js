import { getLocalData } from "@/lib/getdata"

export default async function Home() {
  const posts = await getLocalData()
  return (
    <div>
    <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}