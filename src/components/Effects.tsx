'use client'

import dynamic from 'next/dynamic'
import { Vector2 } from 'three'
import { BlendFunction } from 'postprocessing'

const DynamicEffectComposer = dynamic(() => import('@react-three/postprocessing').then(mod => mod.EffectComposer), { ssr: false })
const DynamicBloom = dynamic(() => import('@react-three/postprocessing').then(mod => mod.Bloom), { ssr: false })
const DynamicChromaticAberration = dynamic(() => import('@react-three/postprocessing').then(mod => mod.ChromaticAberration), { ssr: false })

export default function Effects() {
    return (
        <DynamicEffectComposer>
            <DynamicBloom
                intensity={1.5}
                luminanceThreshold={0.5}
                luminanceSmoothing={0.9}
                blendFunction={BlendFunction.SCREEN}
            />
            <DynamicChromaticAberration
                offset={new Vector2(0.002, 0.002)}
                blendFunction={BlendFunction.NORMAL}
                opacity={0.3}
                radialModulation={false}
                modulationOffset={0}
            />
        </DynamicEffectComposer>
    )
} 