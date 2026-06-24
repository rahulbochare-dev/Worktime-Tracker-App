import { useUserStore } from "@/store/user.store";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index(){
  const [hasUser, setHasUser] = useState(null)
  const {getUser} = useUserStore()

  useEffect(() => {
    const checkUser = async () => {
      const user = await getUser()
      setHasUser(user.length > 0)
    }
    checkUser()
  }, [])

  if (hasUser === null) {
    return null;
  }
  
  return hasUser?
    <Redirect href={"/Home"}/>
    : <Redirect href={"/Register"}/>
}