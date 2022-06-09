import Button from 'components/Button';
import Dialog, { DialogFooter, DialogHeader, DialogProps } from 'components/Dialog';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './assets/styles/Dialog.module.scss';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Typography } from 'components/Typography';

export default {
  title: 'Modals/Dialog',
  component: Dialog,
} as Meta<DialogProps>;

const Template: Story<DialogProps> = (args: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);

  const handleClose = useCallback(() => {
    action('onClose')();
    setIsOpen(false);
  }, []);

  useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

  return (
    <>
      <Button onClick={handleClickOpen}>OPEN</Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
      >
        {args.children}
      </Dialog>
    </>
  );
};

const baseProps = {
  isOpen: true,
} as DialogProps;

export const Default = Template.bind({});
Default.args = {
  ...baseProps,
  children: 'This is a dialog!',
} as DialogProps;

export const WithVariant = Template.bind({});
WithVariant.args = {
  ...baseProps,
  variant: 'success',
  children: 'This is a successful dialog!',
} as DialogProps;

const WithSectionsTemplate: Story<DialogProps> = (args: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);

  const handleClose = useCallback(() => {
    action('onClose')();
    setIsOpen(false);
  }, []);

  useEffect(() => setIsOpen(args.isOpen), [args.isOpen]);

  return (
    <>
      <Button onClick={handleClickOpen}>OPEN</Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        className={styles['with-section']}
        onClose={handleClose}
      >
        <DialogHeader onClose={handleClose}>Dialog Title</DialogHeader>
        <main>
          <Typography gutterBottom={36}>Take a break, have a coffee!</Typography>
          <Typography>...</Typography>
          <Typography gutterBottom={12}>Maybe more coffee!</Typography>
        </main>

        <DialogFooter className={styles['with-section__footer']}>
          <Button onClick={handleClose} variant="subtle">Close</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const WithSections = WithSectionsTemplate.bind({});
WithSections.args = {
  ...baseProps,
} as DialogProps;