import React from 'react'
import { useRouter } from 'next/router'

export default function Pokemon()
{
    const router = useRouter()

    const { pid } = router.query
    return (
        <div>
            This is the pokemon page! {pid}
        </div>
    )
}
