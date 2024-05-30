import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <section className="py-14">
        <div className="container flex justify-center items-center">
            <SignUp path="/sign-up"/>
        </div>
    </section>
  )
}