import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => {
    const ref = useRef<HTMLElement>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.body;
        setMounted(true);
    }, []);

    return mounted ? createPortal(children, ref.current) : null;
}

export default Portal;
