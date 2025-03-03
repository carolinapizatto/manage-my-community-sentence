
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface CancelConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  appointment: {
    name: string;
    date: string;
    time: string;
    location: string;
  };
  reason: string;
}

const CancelConfirmDialog = ({
  open,
  onOpenChange,
  onConfirm,
  appointment,
  reason,
}: CancelConfirmDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to cancel?</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="space-y-4 py-2">
              <p>
                You are about to cancel your appointment for:
              </p>
              <div className="bg-muted p-3 rounded">
                <p><strong>{appointment.name}</strong></p>
                <p>{appointment.date} at {appointment.time}</p>
                <p>{appointment.location}</p>
              </div>
              <p>
                <strong>Your reason for cancelling:</strong>
              </p>
              <p className="bg-muted p-3 rounded">
                {reason}
              </p>
              <p>
                This action cannot be undone. If you still need to attend a session, 
                you will need to book a new appointment.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No, go back</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className="bg-destructive text-destructive-foreground">
            Yes, cancel appointment
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelConfirmDialog;
