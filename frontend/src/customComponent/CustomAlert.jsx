
import React from 'react'
import { Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"



function CustomAlert() {
  return (
 

<Alert className="w-max absolute top-5 left-[20rem] bg-green-300">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>


  )
}

export default CustomAlert


