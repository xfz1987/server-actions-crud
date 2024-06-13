import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import clsx from 'clsx';
import { Task } from '@prisma/client';
import { TaskButtonDelete } from './task-button-delete';
import Link from 'next/link';

export default function TaskCard({ task }: { task: Task }) {
	const { id, name, description, priority, createdAt } = task;
	return (
		<Card>
			<CardHeader className="flex flex-row justify-between">
				<CardTitle>{name}</CardTitle>
				<Badge
					className={clsx({
						'bg-red-500': priority === 'high',
						'bg-yellow-500': priority === 'medium',
						'bg-green-500': priority === 'low',
						'bg-blue-500': priority === 'urgent',
					})}
				>
					{priority}
				</Badge>
			</CardHeader>
			<CardContent>
				<p>{description}</p>
				<span className="text-slate-600">{new Date(createdAt).toLocaleDateString()}</span>
			</CardContent>
			<CardFooter className="flex gap-x-2 justify-end">
				<TaskButtonDelete taskId={id} />
				<Link
					href={`/tasks/${id}/edit`}
					className={buttonVariants({ variant: 'secondary' })}
				>
					Edit
				</Link>
			</CardFooter>
		</Card>
	);
}
