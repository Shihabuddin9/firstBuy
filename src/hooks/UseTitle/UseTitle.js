import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - FirstBuy`;
    }, [title])
}

export default useTitle;