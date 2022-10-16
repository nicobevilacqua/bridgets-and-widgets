select syn.contract_address, syn.to as _to, syn.token as _token, 
amount as amount, syn.evt_index as evt_index, 
syn.evt_block_time as block_time, syn.evt_block_number as evt_block_number
from (
synapse."SynapseBridge_evt_TokenDepositAndSwap" as syn 
LEFT JOIN arbitrum."Bridge_call_rollup" as arb1 on arb1.contract_address=syn.contract_address
LEFT JOIN arbitrum."Rollup_call_bridge" as arb2 ON arb1.contract_address=arb2.contract_address 
)
