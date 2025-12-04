import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CustomIcon from "@/icons";

const GameCard = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Cool Game</CardTitle>
        <CardDescription>
          This is a cool description of a cool game.
        </CardDescription>
        <CardAction>
          <CustomIcon name="github" width={32} height={32} />
        </CardAction>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col gap-2">
        <Button>Play Now!</Button>
      </CardFooter>
    </Card>
  );
};

export const GamesPage = () => {
  return (
    <>
      <GameCard />
    </>
  );
};

export default GamesPage;
