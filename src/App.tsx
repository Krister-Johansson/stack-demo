import { Button } from "@/components/ui/button"
import { useState } from "react"

export function App() {
  const [sayHi, setSayHi] = useState(false)
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          {sayHi ? (
            <h1 className="font-medium">Hi there!</h1>
          ) : (
            <h1 className="font-medium">Welcome to your new project!</h1>
          )}
          <p>
            This is a barebones starter for building a web application using
            React, TypeScript, Tailwind CSS, and Radix UI.
          </p>
        </div>
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button onClick={() => setSayHi(!sayHi)}   className="mt-2">Hello world</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

export default App
