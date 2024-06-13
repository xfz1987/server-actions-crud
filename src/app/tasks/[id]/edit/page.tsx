import React from 'react';
import { TaskForm } from '../../new/task-form';
import { queryTask } from '../../../../actions/tasks-actions';

export default async function TaskPageEdit({ params }: { params: { id: string } }) {
	const task = await queryTask(params.id);

	return (
		<div className="flex justify-center items-center h-screen">
			<TaskForm task={task} />
		</div>
	);
}
