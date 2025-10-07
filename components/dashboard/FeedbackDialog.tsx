"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MessageSquare } from "lucide-react"

interface FeedbackDialogProps {
  adviceId: string
}

export function FeedbackDialog({ adviceId }: FeedbackDialogProps) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    console.log("[v0] Feedback submitted:", { adviceId, status, comment })
    setOpen(false)
    setStatus("")
    setComment("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          Send Feedback
          <MessageSquare className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Your Feedback</DialogTitle>
          <DialogDescription>
            Let us know how you acted on this advice to help improve future recommendations
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-3">
            <Label>What did you do?</Label>
            <RadioGroup value={status} onValueChange={setStatus}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="followed" id="followed" />
                <Label htmlFor="followed" className="font-normal cursor-pointer">
                  Followed the advice
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="planted" id="planted" />
                <Label htmlFor="planted" className="font-normal cursor-pointer">
                  Planted crops
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="harvested" id="harvested" />
                <Label htmlFor="harvested" className="font-normal cursor-pointer">
                  Harvested crops
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pest_problem" id="pest_problem" />
                <Label htmlFor="pest_problem" className="font-normal cursor-pointer">
                  Encountered pest problem
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not_followed" id="not_followed" />
                <Label htmlFor="not_followed" className="font-normal cursor-pointer">
                  Did not follow
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">Additional Comments (Optional)</Label>
            <Textarea
              id="comment"
              placeholder="Share any additional details..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
            />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!status} className="bg-green-600 hover:bg-green-700">
            Submit Feedback
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
