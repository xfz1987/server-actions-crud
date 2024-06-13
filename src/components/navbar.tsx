import React from 'react';
import { ModeToggle } from './theme-toggle-button';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

function Navbar() {
	return (
		<nav className="flex justify-between py-5">
			<Link href="/">
				<h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">NextActionsCRUD</h1>
			</Link>

			<div className="flex gap-x-2 items-center">
				<Link
					href="/tasks/new"
					className={buttonVariants({ variant: 'secondary' })}
				>
					Create Task
				</Link>
				<ModeToggle />
			</div>
		</nav>
	);
}

export default Navbar;
