import React, { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm' }} padding='md'>
			<AppShell.Header>
				<Header />
			</AppShell.Header>

			<AppShell.Navbar p='md'>
				<Navbar />
			</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
};
