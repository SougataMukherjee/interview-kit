class Compute:
    def __init__(self):
        self.total = 0

    def lacs(self, n):
        self.total += n * 100000
        return self

    def thousand(self, n):
        self.total += n * 1000
        return self

    def hundred(self, n):
        self.total += n * 100
        return self

    def value(self):
        return self.total

print(Compute().lacs(2).thousand(3).hundred(5).value())  # 203500
