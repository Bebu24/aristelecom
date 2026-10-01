let open = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function openLead() {
  open = true;
  emit();
}

export function closeLead() {
  open = false;
  emit();
}

export function subscribeLead(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function isLeadOpen() {
  return open;
}
