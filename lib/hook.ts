import { useActiveSectionContext } from "@/context/activeSectionContext"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { SectionActive } from "./types"

export function useSectionInView( sectionName: SectionActive, threshold: number = 0.75 ) {
    const { ref, inView } = useInView({
        threshold,
    })
    const { setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, timeOfLastClick, sectionName])

    return { ref, setActiveSection, setTimeOfLastClick }
}