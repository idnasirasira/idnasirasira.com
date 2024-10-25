'use client';
import { CodeBlockSimple } from '@/components/codeblock/CodeBlock';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Labs() {
  const [isVisibleBox, setIsVisibleBox] = useState(false);

  return (
    <main className="dark:bg-slate-900 w-full h-dvh font-montserrat py-5">
      {/* <Card className="w-3/12">
        <CodeBlockSimple
          code="console.log('Hello, World!');"
          language="javascript"
        />
      </Card> */}

      <Card className="w-12/12 mx-auto container">
        <CardHeader className="font-bold tracking-wide">
          Playground Framer Motion
        </CardHeader>
        <CardContent>
          <div className="mb-5">
            <h1 className="tracking-wider font-extrabold text-3xl">
              Playground Framer Motion
            </h1>
            <div className="border-b-2 bg-white my-2"></div>
            <h2 className="text-2xl font-bold">Simple Animation!</h2>
            <p>Rotate 180 deg for 1.5 seconds</p>
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: '180deg',
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
              }}
              className="w-20 h-20 bg-slate-300"
            ></motion.div>
          </div>

          <div className="h-[200px]">
            <h2 className="text-2xl font-bold">Simple Animation!</h2>
            <p>Animate with Trigger Button</p>
            <Button onClick={() => setIsVisibleBox(!isVisibleBox)}>Show</Button>
            <AnimatePresence>
              {isVisibleBox && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -100,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="w-20 h-20 bg-slate-300 my-2"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-[200px]">
            <h2 className="text-2xl font-bold">Simple Animation!</h2>
            <p>Animate with Trigger Button</p>

            <Button asChild={true}>
              <motion.button
                layout
                onClick={() => setIsVisibleBox(!isVisibleBox)}
                onHoverStart={() => setIsVisibleBox(true)}
                onHoverEnd={() => setIsVisibleBox(false)}
              >
                Show
              </motion.button>
            </Button>
            <AnimatePresence mode={'popLayout'}>
              {isVisibleBox && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -100,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="w-20 h-20 bg-slate-300 my-2"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
