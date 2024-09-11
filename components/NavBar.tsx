import { LeafIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavBar = () => {
  return (
    <header className="px-4 lg:px-6 top-0 sticky bg-white z-20">
      <div className="container flex items-center justify-between h-14 px-4 sm:px-6">
        <Link
          className="flex items-center justify-center text-black gap-2 font-bold text-xl"
          href="/"
        >
          <LeafIcon className="h-6 w-6 text-leaf-500" />
          <span className="text-black">Rentopia</span>
        </Link>
        <nav className="items-center hidden gap-8 lg:flex">
          <Link
            className="text-sm font-semibold hover:underline hover:text-leaf-600"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold hover:underline hover:text-leaf-600"
            href="/all-pg"
          >
            All PG/Flats
          </Link>
          <Link
            className="text-sm font-semibold hover:underline hover:text-leaf-600"
            href="about"
          >
            About
          </Link>
          <Link
            className="text-sm font-semibold hover:underline hover:text-leaf-600"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="text-sm border px-4 py-2 rounded-md bg-gray-800 text-white font-semibold hover:underline hover:text-leaf-600">
              Sign Up / Login
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Sign In</TabsTrigger>
                  <TabsTrigger value="password">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when
                        you&apos;re done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="name" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="user name" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you&apos;ll be
                        logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Name</Label>
                        <Input id="current" type="text" placeholder="name"/>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">Email</Label>
                        <Input id="new" type="email" placeholder="email"/>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">Username</Label>
                        <Input id="new" type="text" placeholder="username"/>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">Password</Label>
                        <Input id="new" type="password" placeholder="password"/>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </header>
  );
};

export default NavBar;
