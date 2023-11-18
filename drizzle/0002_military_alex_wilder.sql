ALTER TABLE records ADD `email` text NOT NULL;--> statement-breakpoint
ALTER TABLE records ADD `contact` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `records_email_unique` ON `records` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `records_contact_unique` ON `records` (`contact`);