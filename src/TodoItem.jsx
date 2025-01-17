import { motion, MotionConfig } from 'motion/react';
export default function TodoItem({completed, id, title, toggleTodo, deleteTodo, containerRef}) {
    
    function getColor() {
        const getComponent = () => Math.floor(Math.random() * 128); // Limit to 0-127 for darker tones
        const r = getComponent();
        const g = getComponent();
        const b = getComponent();
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
    
    return (
        <MotionConfig transition={{ duration: 1 }}>
        <motion.div
            className="border-black border-solid border-2 px-10 py-2 m-2 rounded-full text-white w-max"
            drag
            dragConstraints={containerRef}
            dragElastic={0.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{backgroundColor: getColor()}}
            key={id}>
                {title} |
                <button className="ml-3 text-red-200" onClick={() => deleteTodo(id)}>X</button>
            </motion.div>
        </MotionConfig>
        // <li className="" key={id}>
        //     <label>
        //     <input type="checkbox" checked={completed}
        //     onChange={(e) => toggleTodo(id, e.target.checked)}
        //     />
        //     {title}
        //     </label>
        //     <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        // </li>
    )
}