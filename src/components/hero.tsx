"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CtaButton } from "@/components/cta-button";
import { SocialProofLogo } from "@/components/social-proof-logo";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-background via-accent/30 via-70% pb-28 pt-20">
      <div className="container flex flex-col items-center gap-8 sm:gap-10">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 5, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex cursor-pointer items-center gap-1 rounded-full bg-secondary px-4 py-1 font-medium text-primary hover:bg-secondary/60"
        >
          <span className="text-sm">Introducing DWC</span>
        </motion.div>
        <div className="flex items-center gap-3">
          <div className="flex">
            <Avatar className="border-2 border-white">
              <AvatarImage alt="@john" src="/images/testimonial-1.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@max" src="/images/testimonial-2.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@bob" src="/images/testimonial-3.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@emily" src="/images/testimonial-4.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@michael" src="/images/testimonial-5.avif" />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center">
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
            </div>
            <span className="mt-1 text-sm font-semibold text-muted-foreground">
              Join
              <span className="text-foreground">1000+</span>
              devs
            </span>
          </div>
        </div>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-balance text-center font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          The Coding Community that help you
          <span className="bg-gradient-to-br from-accent to-primary bg-clip-text text-primary">
            growth.
          </span>
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl"
        >
          Discover a supportive community where collaboration, mentorship, and shared knowledge fuel
          your journey to becoming a better developer
        </motion.p>
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex"
        >
          <CtaButton href="#pricing" text="Get Started" />
        </motion.div>
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Image
            alt="dwc discord "
            src="/images/Screenshot-2024-12-18-102754.png"
            width={1100}
            height={698}
            priority
          />
        </motion.div>
      </div>
      <div className="container mt-14 max-w-5xl">
        <h2 className="mb-12 text-center text-sm font-semibold leading-8 text-muted-foreground sm:text-lg">
          Trusted by the best companies in the world
        </h2>
        <div className="grid w-full grid-cols-4  gap-6 sm:grid-cols-6 lg:grid-cols-5">
          <SocialProofLogo image="/images/microsoft.webp" />
          <SocialProofLogo image="/images/google.png" />
          <SocialProofLogo image="/images/amazon.png" />
          <SocialProofLogo image="/images/netflix.png" className="sm:col-start-2" />
          <SocialProofLogo image="/images/facebook.png" className="col-start-2 sm:col-start-auto" />
        </div>
      </div>
    </section>
  );
}
