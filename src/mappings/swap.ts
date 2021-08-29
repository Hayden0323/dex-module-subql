import { SubstrateEvent } from "@subql/types";
import { SwapEntity } from "../types";

export async function handleSwap(event: SubstrateEvent): Promise<void> {
  const blockNumber = event.block.block.header.number.toNumber();
  const { event: { data: [sender, recipient, path, result] } } = event;
  let record = new SwapEntity(blockNumber.toString() + '-' + event.idx.toString())
  record.block_height = blockNumber;
  record.sender = sender.toString();
  record.recipient = recipient.toString();
  await record.save();
}