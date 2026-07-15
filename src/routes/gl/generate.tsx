import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gl/generate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gl/generate"!</div>
}
