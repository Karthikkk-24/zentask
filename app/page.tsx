import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import React from 'react';

export default function Home() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">
                Task Management Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Add New Task</h2>
                    <TaskInput
                        onAddTask={(task) => console.log('New task:', task)}
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Your Tasks</h2>
                    <TaskList tasks={[]} />
                </div>
            </div>
        </div>
    );
}
